import {
    createParamDecorator,
    ExecutionContext
} from '@nestjs/common';

export const CurrentUser = createParamDecorator(
    (data: any, context: ExecutionContext)=> {
        return 'hi there';
    }
)