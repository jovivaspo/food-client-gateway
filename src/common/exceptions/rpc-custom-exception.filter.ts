import { ArgumentsHost, Catch, ExceptionFilter } from '@nestjs/common';
import { RpcException } from '@nestjs/microservices';

@Catch(RpcException)
export class RpcCustomExceptionFilter implements ExceptionFilter {
  catch(exception: RpcException, host: ArgumentsHost) {
    const ctx = host.switchToHttp();

    const response = ctx.getResponse();

    const rpcError = exception.getError();

    if (rpcError.toString().includes('Empty response')) {
      return response.status(500).json({
        message: rpcError
          .toString()
          .substring(0, rpcError.toString().indexOf('(') - 1),
        status: 500,
      });
    }

    if (
      typeof rpcError === 'object' &&
      'status' in rpcError &&
      'message' in rpcError
    ) {
      const status =
        typeof rpcError.status === 'number' ? rpcError.status : 500;
      return response.status(status).json({
        message: rpcError.message,
        status,
      });
    }

    response.status(500).json({
      message: 'Internal server error',
      status: 500,
    });
  }
}
