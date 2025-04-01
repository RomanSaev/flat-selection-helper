-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Flat" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "url" TEXT,
    "pseudonym" TEXT,
    "watched" BOOLEAN NOT NULL DEFAULT false,
    "comment" TEXT,
    "rating" INTEGER,
    "cost" INTEGER,
    "active" BOOLEAN NOT NULL DEFAULT true
);
INSERT INTO "new_Flat" ("active", "comment", "cost", "id", "pseudonym", "rating", "url", "watched") SELECT "active", "comment", "cost", "id", "pseudonym", "rating", "url", "watched" FROM "Flat";
DROP TABLE "Flat";
ALTER TABLE "new_Flat" RENAME TO "Flat";
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
