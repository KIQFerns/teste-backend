const userService = require("../../services/user.service");
const db = require("../../models");

beforeAll(async () => {
  await db.sequelize.sync({ force: true });
});

afterAll(async () => {
  await db.sequelize.close();
});

describe("User Service", () => {
  it("deve criar um novo usuário", async () => {
    const user = { name: "João", email: "joao@email.com", active: true };
    const created = await userService.createUser(user);

    expect(created.name).toBe(user.name);
    expect(created.email).toBe(user.email);
  });

  it("deve retornar todos os usuários", async () => {
    const users = await userService.getAllUsers();
    expect(Array.isArray(users)).toBe(true);
  });

  it("deve retornar apenas usuários ativos", async () => {
    await userService.createUser({
      name: "Paulo",
      email: "paulo@email.com",
      active: true,
    });
    await userService.createUser({
      name: "Maria",
      email: "maria@email.com",
      active: false,
    });

    const users = await userService.getActiveUsers();

    const allActive = users.every((user) => user.active);
    expect(allActive).toBe(true);
  });
});
