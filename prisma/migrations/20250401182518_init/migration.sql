-- CreateTable
CREATE TABLE "Flat" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "url" TEXT NOT NULL,
    "pseudonym" TEXT NOT NULL,
    "watched" BOOLEAN NOT NULL,
    "comment" TEXT NOT NULL,
    "rating" INTEGER NOT NULL,
    "cost" INTEGER NOT NULL,
    "active" BOOLEAN NOT NULL
);

-- CreateTable
CREATE TABLE "Advantage" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "text" TEXT NOT NULL,
    "flatId" TEXT NOT NULL,
    CONSTRAINT "Advantage_flatId_fkey" FOREIGN KEY ("flatId") REFERENCES "Flat" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Disadvantage" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "text" TEXT NOT NULL,
    "flatId" TEXT NOT NULL,
    CONSTRAINT "Disadvantage_flatId_fkey" FOREIGN KEY ("flatId") REFERENCES "Flat" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
