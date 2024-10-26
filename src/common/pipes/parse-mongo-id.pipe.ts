import { ArgumentMetadata, BadGatewayException, BadRequestException, Injectable, PipeTransform } from '@nestjs/common';
import { isValidObjectId } from 'mongoose';

@Injectable()
export class ParseMongoIdPipe implements PipeTransform {

  transform(value: string, metadata: ArgumentMetadata) {

     if(!isValidObjectId(value)){
      throw new BadRequestException(`${value} is not a valid MongoId`)
     }
    // console.log({value,metadata});
    return value;
  }
}
