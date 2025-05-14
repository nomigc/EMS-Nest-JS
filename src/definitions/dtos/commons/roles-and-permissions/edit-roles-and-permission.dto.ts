import { IsBoolean, IsMongoId, IsOptional } from 'class-validator';
import { Types } from 'mongoose';

export class EditGroupMenuDto {
  @IsMongoId()
  @IsOptional()
  groupId?: Types.ObjectId;

  @IsMongoId()
  @IsOptional()
  menuId?: Types.ObjectId;

  @IsBoolean()
  @IsOptional()
  read?: Boolean;

  @IsBoolean()
  @IsOptional()
  edit: Boolean;

  @IsBoolean()
  @IsOptional()
  delete?: Boolean;

  @IsBoolean()
  @IsOptional()
  import?: Boolean;

  @IsBoolean()
  @IsOptional()
  export?: Boolean;
}
