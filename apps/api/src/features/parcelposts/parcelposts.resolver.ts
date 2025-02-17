import { Args, ID, Mutation, Query, Resolver } from '@nestjs/graphql';
import { CreateParcelpostInput } from './dto/create-parcelpost.input';
import { UpdateParcelpostInput } from './dto/update-parcelpost.input';
import { Parcelpost } from './entities/parcelpost.entity';
import { ParcelpostsService } from './parcelposts.service';

@Resolver(() => Parcelpost)
export class ParcelpostsResolver {
  constructor(private readonly parcelpostsService: ParcelpostsService) {}

  @Mutation(() => Parcelpost)
  async createParcelpost(
    @Args('createParcelpostInput') createParcelpostInput: CreateParcelpostInput,
  ) {
    return this.parcelpostsService.create(createParcelpostInput);
  }

  @Query(() => [Parcelpost], { name: 'parcelposts' })
  async findAll() {
    return this.parcelpostsService.findAll();
  }

  @Query(() => Parcelpost, { name: 'parcelpost' })
  async findOne(@Args('id', { type: () => ID }) id: string) {
    return this.parcelpostsService.findOne(id);
  }

  @Mutation(() => Parcelpost)
  async updateParcelpost(
    @Args('updateParcelpostInput') updateParcelpostInput: UpdateParcelpostInput,
  ) {
    return this.parcelpostsService.update(
      updateParcelpostInput.id,
      updateParcelpostInput,
    );
  }

  @Mutation(() => Parcelpost)
  async removeParcelpost(@Args('id', { type: () => ID }) id: string) {
    return this.parcelpostsService.remove(id);
  }
}
