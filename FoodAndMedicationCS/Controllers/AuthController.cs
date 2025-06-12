using Microsoft.AspNetCore.Mvc;
using Microsoft.IdentityModel.Tokens;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Text;

[ApiController]
[Route("api/[controller]")]
public class AuthController : ControllerBase
{
    private readonly UserService _userService;
    private readonly IConfiguration _config;

    public AuthController(UserService userService, IConfiguration config)
    {
        _userService = userService;
        _config = config;
    }

    [HttpPost("signup")]
    public async Task<IActionResult> Signup([FromBody] User user)
    {
        var existing = await _userService.GetUserByEmailAsync(user.Email);
        if (existing != null)
            return BadRequest(new { error = "User already exists" });

        user.id = user.Email;
        user.PasswordHash = PasswordHasher.HashPassword(user.PasswordHash);
        await _userService.CreateUserAsync(user);

        return Ok(new { message = "User created" });
    }

    [HttpPost("login")]
    public async Task<IActionResult> Login([FromBody] User login)
    {
        var user = await _userService.GetUserByEmailAsync(login.Email);
        if (user == null || !PasswordHasher.VerifyPassword(login.PasswordHash, user.PasswordHash))
            return Unauthorized(new { error = "Invalid credentials" });

        var token = GenerateJwtToken(user.Email);
        return Ok(new { token });
    }

    private string GenerateJwtToken(string email)
    {
        var claims = new[]
        {
            new Claim(JwtRegisteredClaimNames.Sub, email)
        };

        var key = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(_config["Jwt:Key"]));
        var creds = new SigningCredentials(key, SecurityAlgorithms.HmacSha256);

        var token = new JwtSecurityToken(
            _config["Jwt:Issuer"],
            _config["Jwt:Issuer"],
            claims,
            expires: DateTime.Now.AddHours(2),
            signingCredentials: creds);

        return new JwtSecurityTokenHandler().WriteToken(token);
    }
}
