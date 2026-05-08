import {render} from 'preact';
import {useState} from 'preact/hooks';

export default async () => {
  render(<Extension />, document.body);
};

const Extension = () => {
  const [isProcessing, setIsProcessing] = useState(false);

  const handleCaptureAndUpload = async () => {
    setIsProcessing(true);
    try {
      const photo = await shopify.camera.takePhoto({
        quality: 0.8,
        maxWidth: 1520,
        maxHeight: 1520,
      });

    } catch (error) {
      shopify.toast.show(`Error: ${error.message}`);
    } finally {
      setIsProcessing(false);
    }
  };

  return (
    <s-tile
      heading="Upload Photo"
      onClick={handleCaptureAndUpload}
      disabled={isProcessing}
    />
  );
};