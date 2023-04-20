import { ExecutionContext } from '@nestjs/common';
import { AuthGuard } from '../auth/auth.guard';
export declare class GraphqlJwtAuthGuard extends AuthGuard {
    getRequest(context: ExecutionContext): any;
}
