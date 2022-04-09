-- CreateTable
CREATE TABLE "color_team" (
    "id" SERIAL NOT NULL,
    "ds_color" VARCHAR NOT NULL,
    "cod_color" VARCHAR NOT NULL,

    CONSTRAINT "color_team_pk" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "game_register" (
    "id" SERIAL NOT NULL,
    "id_team" INTEGER NOT NULL,
    "id_game" INTEGER NOT NULL,
    "ds_game" VARCHAR NOT NULL,
    "ds_team" VARCHAR NOT NULL,
    "score" INTEGER NOT NULL DEFAULT 0,

    CONSTRAINT "game_register_pk" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "games" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR NOT NULL,

    CONSTRAINT "games_pk" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "members" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR NOT NULL,
    "age" INTEGER NOT NULL,
    "id_team" INTEGER NOT NULL,
    "status" VARCHAR NOT NULL,

    CONSTRAINT "members_pk" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "teams" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR NOT NULL,
    "id_color" INTEGER,
    "total_pontos" INTEGER,

    CONSTRAINT "teams_pk" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "color_team_id_uindex" ON "color_team"("id");

-- CreateIndex
CREATE UNIQUE INDEX "game_register_id_uindex" ON "game_register"("id");

-- CreateIndex
CREATE UNIQUE INDEX "games_id_uindex" ON "games"("id");

-- CreateIndex
CREATE UNIQUE INDEX "members_id_uindex" ON "members"("id");

-- CreateIndex
CREATE UNIQUE INDEX "teams_id_uindex" ON "teams"("id");
