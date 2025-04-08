export type Model = {
  id: string;
  name: string;
  version: string;
  createdAt: string;
  updatedAt?: string;
  description?: string;
  tags?: string[];
  fileUrl?: string; // for upload/download
};
