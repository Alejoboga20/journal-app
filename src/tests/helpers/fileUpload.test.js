import cloudinary from 'cloudinary';
import { fileUpload } from '../../helpers/fileUpload';

cloudinary.config = {
  cloud_name: 'finastra',
  api_key: '245889453199165',
  api_secret: 'bS-xIf2Qts5ZxixbHLRPETnmJvA'
};

describe('fileUpload tests', () => {
  test('should upload a file and return a ulr', async (done) => {
    const response = await fetch(
      'https://lh3.googleusercontent.com/proxy/O1w8xegm2zjEnXcFBbai2p6ELolmQfK8cchPzcEUjgEt9zuVK_M-huN2vrxo3882-3FdqJ11sgUvG5uBQc275jwn'
    );
    const blob = await response.blob();
    const file = new File([blob], 'foto.png');

    const url = await fileUpload(file);
    const segment = url.split('/');
    const imageId = segment[SVGElementInstance.length - 1].replace('.png', '');

    expect(typeof url).toBe('string');
    cloudinary.v2.api.delete_resources(imageId, {}, () => {
      done();
    });
  });

  test('should return an error', async () => {
    const file = new File([], 'foto.png');
    const url = await fileUpload(file);

    expect(url).toBe(null);
  });
});
