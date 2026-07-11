-- CreateTable
CREATE TABLE "cors_domains" (
    "id" SERIAL NOT NULL,
    "domain" TEXT NOT NULL,
    "habilitated" BOOLEAN NOT NULL DEFAULT false,

    CONSTRAINT "cors_domains_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "cors_domains_domain_key" ON "cors_domains"("domain");
