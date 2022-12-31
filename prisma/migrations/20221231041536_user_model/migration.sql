-- CreateTable
CREATE TABLE "User" (
    "userId" SERIAL NOT NULL,
    "username" VARCHAR(50) NOT NULL,
    "email" VARCHAR(100) NOT NULL,
    "type" VARCHAR(10) NOT NULL,
    "password" VARCHAR(1000),
    "address" VARCHAR(512) NOT NULL,
    "contact" VARCHAR(20) NOT NULL,
    "verified" BOOLEAN NOT NULL,
    "skills" VARCHAR(300) NOT NULL,
    "description" VARCHAR(300) NOT NULL,
    "followers" INTEGER NOT NULL DEFAULT 0,
    "likes" INTEGER NOT NULL DEFAULT 0,

    CONSTRAINT "User_pkey" PRIMARY KEY ("userId")
);
