import { BaseProcessor } from '../../../core/processor/BaseProcessor';
import {
  Response,
  Request,
  ResponseBuilder,
} from '../../../core/processor/Http';

class HelloWorldProcessor extends BaseProcessor {
  async process(request: Request): Promise<Response> {
    return ResponseBuilder.create(200, {
      message: 'Hello World Corebapp Processor',
    });
  }
  async validateInput(request: Request): Promise<void> {}
}

export const processor = HelloWorldProcessor;
