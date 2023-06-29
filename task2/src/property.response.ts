import { IpropertyDTO } from './property.dto';
import { ApiProperty } from '@nestjs/swagger';

export class PropertyResponse implements Required<IpropertyDTO> {
  @ApiProperty({
    required: true,
    description: 'ключ монеты из которой конвертируем',
  })
  from: string;

  @ApiProperty({
    required: true,
    description:
      'ключ монеты в которую конвертируем. Необязателен, По умолчанию tether',
    default: 'tether',
  })
  to: string;

  @ApiProperty({
    required: true,
    description:
      'количество монет которое конвертируем. Необязателен, По умолчанию 1',
    default: 1,
  })
  amount: number;

  @ApiProperty({
    required: true,
    description: 'Результат конвертации',
    default: 1,
  })
  result: string;
}
