/*
  Warnings:

  - Changed the type of `Game_url` on the `game` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `Total_score` on the `user` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- AlterTable
ALTER TABLE "game" DROP COLUMN "Game_url",
ADD COLUMN     "Game_url" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "user" DROP COLUMN "Total_score",
ADD COLUMN     "Total_score" INTEGER NOT NULL;
