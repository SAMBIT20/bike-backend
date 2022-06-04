import {
  Body,
  Controller,
  Delete,
  Get,
  NotFoundException,
  Param,
  Patch,
  Post,
  Put,
  Query,
  UseGuards,
} from '@nestjs/common';
import { BikeService } from './bike.service';
import { Bike } from './bike.entity';
import { Roles } from 'src/roles.decorator';
import { Role } from 'src/role.enum';
import { AuthGuard } from 'src/roles.guard';
@Controller('api/bike')
export class BikeController {
  constructor(private bikeService: BikeService) {}

  @Post('/search')
  async search(@Body() data: Bike) {
    let { model, color, location, avgRating } = data;

    let res = await this.bikeService.filterBikes(
      model,
      color,
      location,
      avgRating,
    );
    return res;
  }

  @Post()
  async create(@Body() data: Bike) {
    let { model, color, location, isAvailable, avgRating } = data;
    console.log(isAvailable);

    let res = await this.bikeService.create(
      model,
      color,
      location,
      isAvailable,
      avgRating,
    );
    return res;
  }

  @Get('')
  async getBikePagination(
    @Query('page') page: number,
    @Query('limit') limit: number,
  ) {
    let data = await this.bikeService.getPagiNation(page, 10);
    return data;
  }

  @Get('/admin')
  async getBikePaginationByAdmin(
    @Query('page') page: number,
    @Query('limit') limit: number,
  ) {
    let data = await this.bikeService.getPagiNationByAdmin(page, 10);
    return data;
  }

  @Get('bikecount')
  async getTotalBikes() {
    let data = await this.bikeService.getTotalNumberOfBikes();
    return data;
  }

  @Get('/:id')
  async getBikeById(@Param('id') id: string) {
    let data = await this.bikeService.getById(id.trim());
    console.log(id, data);

    return data;
  }

  @Put('/:id')
  async update(@Param('id') id: string, @Body() data: Bike) {
    let { model, color, location, isAvailable, avgRating } = data;
    console.log(isAvailable);

    let res = await this.bikeService.update(
      id,
      model,
      color,
      location,
      isAvailable,
      avgRating,
    );
    return res;
  }

  @Delete('/:id')
  async delete(@Param('id') id: string) {
    return await this.bikeService.remove(parseInt(id));
  }

  @Patch('updateAval/:id')
  async updateIsAvailable(@Param('id') id: string, @Body() data: Bike) {
    let { isAvailable } = data;
    console.log(isAvailable);

    let res = await this.bikeService.changeAvailability(id, isAvailable);
    return res;
  }
}
