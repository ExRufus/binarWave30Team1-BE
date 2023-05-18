-- CreateTable
CREATE TABLE "user" (
    "id" TEXT NOT NULL,
    "Email" TEXT NOT NULL,
    "Username" TEXT NOT NULL,
    "Password" TEXT NOT NULL,
    "Total_score" TEXT NOT NULL,
    "Biodata" TEXT NOT NULL,
    "City" TEXT NOT NULL,

    CONSTRAINT "user_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "game" (
    "id" TEXT NOT NULL,
    "Name" TEXT NOT NULL,
    "Description" TEXT NOT NULL,
    "thumbnail_url" TEXT NOT NULL,
    "Game_url" TEXT NOT NULL,
    "play_count" TEXT NOT NULL,

    CONSTRAINT "game_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "user_Email_key" ON "user"("Email");

-- CreateIndex
CREATE UNIQUE INDEX "user_Username_key" ON "user"("Username");

-- CreateIndex
CREATE UNIQUE INDEX "user_Password_key" ON "user"("Password");

-- CreateIndex
CREATE UNIQUE INDEX "user_Total_score_key" ON "user"("Total_score");

-- CreateIndex
CREATE UNIQUE INDEX "user_Biodata_key" ON "user"("Biodata");

-- CreateIndex
CREATE UNIQUE INDEX "user_City_key" ON "user"("City");

-- CreateIndex
CREATE UNIQUE INDEX "game_Name_key" ON "game"("Name");

-- CreateIndex
CREATE UNIQUE INDEX "game_Description_key" ON "game"("Description");

-- CreateIndex
CREATE UNIQUE INDEX "game_thumbnail_url_key" ON "game"("thumbnail_url");

-- CreateIndex
CREATE UNIQUE INDEX "game_Game_url_key" ON "game"("Game_url");

-- CreateIndex
CREATE UNIQUE INDEX "game_play_count_key" ON "game"("play_count");
