/*
  Warnings:

  - Changed the type of `play_count` on the `game` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- AlterTable
ALTER TABLE "game" DROP COLUMN "play_count",
ADD COLUMN     "play_count" INTEGER NOT NULL,
ALTER COLUMN "Game_url" SET DATA TYPE TEXT;
