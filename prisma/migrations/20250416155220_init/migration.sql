-- CreateTable
CREATE TABLE "customers" (
    "customerId" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "phone" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "customers_pkey" PRIMARY KEY ("customerId")
);

-- CreateTable
CREATE TABLE "bikes" (
    "bikeId" TEXT NOT NULL,
    "brand" TEXT NOT NULL,
    "model" TEXT NOT NULL,
    "year" INTEGER NOT NULL,
    "customerId" TEXT NOT NULL,

    CONSTRAINT "bikes_pkey" PRIMARY KEY ("bikeId")
);

-- CreateTable
CREATE TABLE "service_records" (
    "serviceId" TEXT NOT NULL,
    "bikeId" TEXT NOT NULL,
    "serviceDate" TIMESTAMP(3) NOT NULL,
    "completionDate" TIMESTAMP(3),
    "description" TEXT NOT NULL,
    "status" TEXT NOT NULL,

    CONSTRAINT "service_records_pkey" PRIMARY KEY ("serviceId")
);

-- CreateIndex
CREATE UNIQUE INDEX "customers_email_key" ON "customers"("email");

-- CreateIndex
CREATE UNIQUE INDEX "bikes_customerId_key" ON "bikes"("customerId");

-- CreateIndex
CREATE UNIQUE INDEX "service_records_bikeId_key" ON "service_records"("bikeId");

-- AddForeignKey
ALTER TABLE "bikes" ADD CONSTRAINT "bikes_customerId_fkey" FOREIGN KEY ("customerId") REFERENCES "customers"("customerId") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "service_records" ADD CONSTRAINT "service_records_bikeId_fkey" FOREIGN KEY ("bikeId") REFERENCES "bikes"("bikeId") ON DELETE RESTRICT ON UPDATE CASCADE;
