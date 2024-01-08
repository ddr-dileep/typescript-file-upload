interface File {
    originalname: string;
    mimetype: string;
    size: number;
    buffer: Buffer;
  }
  
  const uploadedFiles: File[] = [];
  
  export const uploadFile = async (file: File): Promise<File[]> => {
    uploadedFiles.push(file);
    return uploadedFiles;
  };
  
  export const getUploadedFiles = async (): Promise<File[]> => {
    return uploadedFiles;
  };
  