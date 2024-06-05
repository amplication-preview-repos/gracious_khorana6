import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { UploadModuleBase } from "./base/upload.module.base";
import { UploadService } from "./upload.service";
import { UploadController } from "./upload.controller";
import { UploadResolver } from "./upload.resolver";

@Module({
  imports: [UploadModuleBase, forwardRef(() => AuthModule)],
  controllers: [UploadController],
  providers: [UploadService, UploadResolver],
  exports: [UploadService],
})
export class UploadModule {}
