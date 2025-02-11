import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { ParcelpostsService } from './parcelposts.service';
import { Parcelpost } from './entities/parcelpost.entity';
import { CreateParcelpostInput } from './dto/create-parcelpost.input';
import { UpdateParcelpostInput } from './dto/update-parcelpost.input';

@Resolver(() => Parcelpost)
export class ParcelpostsResolver {
  constructor(private readonly parcelpostsService: ParcelpostsService) {}

  @Mutation(() => Parcelpost)
  createParcelpost(@Args('createParcelpostInput') createParcelpostInput: CreateParcelpostInput) {
    return this.parcelpostsService.create(createParcelpostInput);
  }

  @Query(() => [Parcelpost], { name: 'parcelposts' })
  findAll() {
    return this.parcelpostsService.findAll();
  }

  @Query(() => Parcelpost, { name: 'parcelpost' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.parcelpostsService.findOne(id);
  }

  @Mutation(() => Parcelpost)
  updateParcelpost(@Args('updateParcelpostInput') updateParcelpostInput: UpdateParcelpostInput) {
    return this.parcelpostsService.update(updateParcelpostInput.id, updateParcelpostInput);
  }

  @Mutation(() => Parcelpost)
  removeParcelpost(@Args('id', { type: () => Int }) id: number) {
    return this.parcelpostsService.remove(id);
  }
}
