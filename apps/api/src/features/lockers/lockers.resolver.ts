import { Args, Int, Mutation, Query, Resolver } from '@nestjs/graphql';
import { CreateLockerInput } from './dto/create-locker.input';
import { UpdateLockerInput } from './dto/update-locker.input';
import { Locker } from './entities/locker.entity';
import { LockersService } from './lockers.service';

@Resolver(() => Locker)
export class LockersResolver {
  constructor(private readonly lockersService: LockersService) {}

  @Mutation(() => Locker)
  async createLocker(
    @Args('createLockerInput') createLockerInput: CreateLockerInput,
  ) {
    return this.lockersService.create(createLockerInput);
  }

  @Query(() => [Locker], { name: 'lockers' })
  async findAll() {
    return this.lockersService.findAll();
  }

  @Query(() => Locker, { name: 'locker' })
  async findOne(@Args('id', { type: () => Int }) id: number) {
    return this.lockersService.findOne(id);
  }

  @Mutation(() => Locker)
  async updateLocker(
    @Args('updateLockerInput') updateLockerInput: UpdateLockerInput,
  ) {
    return this.lockersService.update(updateLockerInput.id, updateLockerInput);
  }

  @Mutation(() => Locker)
  async removeLocker(@Args('id', { type: () => Int }) id: number) {
    return this.lockersService.remove(id);
  }

  @Mutation(() => [Locker], {
    name: 'createMasterLocker',
  })
  async master() {
    return this.lockersService.master();
  }
}
