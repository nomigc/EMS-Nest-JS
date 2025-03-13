import { IsNotEmpty, IsMongoId, IsOptional, IsString, IsUrl } from 'class-validator';
import { Types } from 'mongoose';
import { Company } from 'src/schemas/commons/company';
import { IsFile } from 'src/validator';

export class createCompanyDto {
  //* basic info
  profileImage: String;

  @IsString()
  @IsNotEmpty()
  companyName: String;

  @IsString()
  @IsNotEmpty()
  email: String;

  @IsString()
  @IsNotEmpty()
  phoneNumber1: String;

  @IsString()
  @IsNotEmpty()
  phoneNumber2: String;

  @IsString()
  @IsNotEmpty()
  fax: String;

  @IsString()
  @IsOptional()
  website?: String;

  @IsNotEmpty()
  @IsMongoId({ message: 'Owner id is not valid' })
  owner: string | Types.ObjectId | Company;

  @IsString({ each: true })
  @IsNotEmpty()
  tags: String[];

  @IsString()
  @IsNotEmpty()
  deals: String;

  @IsString()
  @IsNotEmpty()
  industry: String;

  @IsString()
  @IsNotEmpty()
  contact: String;

  @IsString()
  @IsNotEmpty()
  currency: String;

  @IsString()
  @IsNotEmpty()
  language: String;

  @IsString()
  @IsNotEmpty()
  aboutCompany: String;

  //* address
  @IsString()
  @IsNotEmpty()
  primaryAddress: String;

  @IsString()
  @IsOptional()
  secondaryAddress: String;

  @IsString()
  @IsOptional()
  city: String;

  @IsString()
  @IsOptional()
  state: String;

  @IsString()
  @IsOptional()
  country: String;

  @IsString()
  @IsOptional()
  zipCode: String;

  //* social profile
  @IsString()
  @IsOptional()
  facebook: String;

  @IsString()
  @IsOptional()
  instagram: String;

  @IsString()
  @IsOptional()
  linkedin: String;

  @IsString()
  @IsOptional()
  twitter: String;

  @IsString()
  @IsOptional()
  youtube: String;
}
