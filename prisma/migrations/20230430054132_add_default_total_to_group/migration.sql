-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_groups" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "shortId" TEXT NOT NULL,
    "total" INTEGER NOT NULL DEFAULT 0
);
INSERT INTO "new_groups" ("id", "shortId", "total") SELECT "id", "shortId", "total" FROM "groups";
DROP TABLE "groups";
ALTER TABLE "new_groups" RENAME TO "groups";
CREATE UNIQUE INDEX "groups_shortId_key" ON "groups"("shortId");
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
