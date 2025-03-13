import { Body, Controller, Delete, Get, Param, Post, Put, Query, UseGuards } from '@nestjs/common';
import { DesignationService } from './designation.service';
import { successfulResponse } from 'src/utils';
import {
  createDesignationDto,
  editDesignationDto,
} from 'src/definitions/dtos/employees/designation';
import { isAdminGuard, JwtAuthGuard } from 'src/middlewares/guard';
import { Types } from 'mongoose';
import { DESIGNATION_MODEL } from 'src/schemas/employees/designation';

@UseGuards(JwtAuthGuard, isAdminGuard)
@Controller('designation')
export class DesignationController {
  constructor(private readonly designationService: DesignationService) {}

  @Post()
  async create(@Body() createDesignationDto: createDesignationDto) {
    const designation = await this.designationService.create(createDesignationDto);
    return successfulResponse(`${DESIGNATION_MODEL} created successfully`, designation);
  }

  @Put(':id')
  async update(@Param('id') id: Types.ObjectId, @Body() editDesignationDto: editDesignationDto) {
    const editDesignation = await this.designationService.edit(editDesignationDto, id);

    return successfulResponse(`${DESIGNATION_MODEL}n edited successfully`, editDesignation);
  }

  @Get(':id')
  async get(@Param('id') id: Types.ObjectId) {
    const designation = await this.designationService.getSingle(id);
    return successfulResponse(`${DESIGNATION_MODEL}on found successfully`, designation);
  }

  @Get()
  async getAll(
    @Query('page') page: string,
    @Query('limit') limit: string,
    @Query('search') search: string,
  ) {
    const designations = await this.designationService.getAll(page, limit, search);
    return successfulResponse(`${DESIGNATION_MODEL}ns found successfully`, designations);
  }

  @Delete(':id')
  async delete(@Param('id') id: Types.ObjectId) {
    const designation = await this.designationService.delete(id);
    return successfulResponse(`${DESIGNATION_MODEL} deleted successfully`, designation);
  }
}
