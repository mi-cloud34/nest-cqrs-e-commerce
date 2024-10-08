import { Controller, Get, Req, UseGuards } from '@nestjs/common';
import { AppService } from './app.service';
import { AuthenticationGuard } from './common/insfractructure/guards/authentication.guard';
import { Permissions } from './common/insfractructure/decorators/permissions.decorator';
import { Resource } from './roles/enums/resource.enum';
import { Action } from './roles/enums/action.enum';
import { AuthorizationGuard } from './common/insfractructure/guards/authorization.guard';

//@UseGuards(AuthenticationGuard, AuthorizationGuard)

@Controller('/products')
export class AppController {
  constructor(private readonly appService: AppService) {}

  // @Permissions([{ resource: Resource.settings, actions: [Action.read] }])
  @Get()
  someProtectedRoute(@Req() req) {
    return { message: 'Accessed Resource', userId: req.userId };
  }
}
