import { Upload as TUpload } from "../api/upload/Upload";

export const UPLOAD_TITLE_FIELD = "id";

export const UploadTitle = (record: TUpload): string => {
  return record.id?.toString() || String(record.id);
};
