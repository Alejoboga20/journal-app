import { fileUpload } from '../../helpers/fileUpload';

describe('fileUpload tests', () => {
  test('should upload a file and return a ulr', async () => {
    const response = await fetch(
      'https://lh3.googleusercontent.com/proxy/O1w8xegm2zjEnXcFBbai2p6ELolmQfK8cchPzcEUjgEt9zuVK_M-huN2vrxo3882-3FdqJ11sgUvG5uBQc275jwn'
    );
    const blob = await response.blob();
    const file = new File([blob], 'foto.png');

    const url = await fileUpload(file);

    expect(typeof url).toBe('string');
  });

  test('should return an error', async () => {
    const file = new File([], 'foto.png');
    const url = await fileUpload(file);

    expect(url).toBe(null);
  });
});
