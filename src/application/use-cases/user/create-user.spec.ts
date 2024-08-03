import { CreateUser } from "./create-user";
import { InMemoryUsersRepository } from "@test/repositories/in-memory-users-repository";


describe('Testa criação de Usuario', () => {


  it('Ser possivel enviar um user', async () => {

    const userRepository = new InMemoryUsersRepository();
    const createUser = new CreateUser(userRepository);

    const { user } = await createUser.execute({
      name: 'name user',
      email: 'email@mail.com',
      password: '123123'
    });

    expect(userRepository.users[0]).toEqual(user);
  });


})