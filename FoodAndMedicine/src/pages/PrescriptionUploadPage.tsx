import React, { useState, ChangeEvent } from 'react';
import { useNavigate } from 'react-router-dom';
import Tesseract from 'tesseract.js';



const PrescriptionUploadPage: React.FC = () => {
  const navigate = useNavigate();
  const [image, setImage] = useState<File | null>(null);
  const [preview, setPreview] = useState<string | null>(null);
  const [scannedText, setScannedText] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);

  const handleImageChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setImage(file);
      setPreview(URL.createObjectURL(file));
      setScannedText('');
    }
  };

  const handleScan = async () => {
    if (!image) {
      alert('Please select an image first.');
      return;
    }

    setLoading(true);
    try {
      const result = await Tesseract.recognize(image, 'eng', {
        logger: m => console.log(m),
      });
      setScannedText(result.data.text);
    } catch (err) {
      alert('Failed to scan the image.');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-orange-100 to-orange-200 p-6">
      <div className="bg-white bg-opacity-40 backdrop-blur-md rounded-xl p-6 w-full max-w-md shadow-lg text-center">
        <h2 className="text-xl font-bold mb-4 text-gray-800">Upload & Scan Prescription</h2>

        <input
          type="file"
          accept="image/*"
          onChange={handleImageChange}
          className="mb-4 w-full"
        />

        {preview && (
          <img
            src={preview}
            alt="Prescription preview"
            className="rounded-lg shadow-md max-h-64 mx-auto mb-4"
          />
        )}

        <button
          onClick={handleScan}
          className="bg-orange-500 text-white py-2 px-4 rounded-full hover:bg-orange-600 transition font-semibold mb-4"
          disabled={loading}
        >
          {loading ? 'Scanning...' : 'Scan My Prescription'}
        </button>

        {scannedText && (
          <>
            <div className="bg-gray-100 p-4 rounded-md text-left text-sm whitespace-pre-wrap max-h-64 overflow-y-auto mb-4">
              {scannedText}
            </div>

            <button
              onClick={() => navigate(`/create-medicine/${encodeURIComponent(scannedText.trim())}`)}
              disabled={!scannedText.trim()}
              className={`py-2 px-4 rounded-full font-semibold transition ${
                scannedText.trim()
                  ? 'bg-green-600 text-white hover:bg-green-700'
                  : 'bg-gray-300 text-gray-500 cursor-not-allowed'
              }`}
            >
              The medicine is correct, add to my prescriptions
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default PrescriptionUploadPage;
