import { PrismaClient } from "@prisma/client";

// This will only create one client; any subsequent import from this will will return the same cached instance
const ormClient = new PrismaClient();

export default ormClient;
