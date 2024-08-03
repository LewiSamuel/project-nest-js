import { CreateUser } from "./create-user";
import { InMemoryUsersRepository } from "@test/repositories/in-memory-users-repository";


describe('Testa listagem de Usuario', () => {


  it('Ser possivel listar um user', async () => {

    const userRepository = new InMemoryUsersRepository();
    const createUser = new CreateUser(userRepository);

    const { user } = await createUser.execute({
      name: 'name user',
      email: 'email@mail.com',
      password: '123123'
    });

    expect((await userRepository.list()).length).toEqual(1);
  });


})