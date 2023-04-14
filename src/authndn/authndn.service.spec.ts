import { Test, TestingModule } from '@nestjs/testing';
import { AuthndnService } from './authndn.service';

describe('AuthndnService', () => {
  let service: AuthndnService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AuthndnService],
    }).compile();

    service = module.get<AuthndnService>(AuthndnService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
