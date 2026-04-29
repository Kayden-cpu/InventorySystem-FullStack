export interface InventoryItem {
    id: number;

    name: string;

    description?: string;

    imageUrl?: string;

    sku: string;

    price: number;

    stockQuantity: number;

    availableMedium?: "Online" | "In Store";

    isActive: boolean;

    createdAt: Date;

    updatedAt: Date;
}

export const mockInventoryItems: InventoryItem[] = [
  {
    id: 1,
    name: "Wireless Headphones",
    description: "Noise cancelling over-ear headphones",
    imageUrl: "https://example.com/images/headphones.jpg",
    sku: "WH-1001",
    price: 199.99,
    stockQuantity: 25,
    availableMedium: "Online",
    isActive: true,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: 2,
    name: "Gaming Mouse",
    description: "High precision RGB gaming mouse",
    imageUrl: "https://example.com/images/mouse.jpg",
    sku: "GM-2002",
    price: 59.99,
    stockQuantity: 100,
    availableMedium: "Online",
    isActive: true,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: 3,
    name: "Mechanical Keyboard",
    description: "Blue switch mechanical keyboard",
    imageUrl: "https://example.com/images/keyboard.jpg",
    sku: "MK-3003",
    price: 129.99,
    stockQuantity: 40,
    availableMedium: "Online",
    isActive: true,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: 4,
    name: "4K Monitor",
    description: "27-inch UHD display",
    imageUrl: "https://example.com/images/monitor.jpg",
    sku: "MN-4004",
    price: 349.99,
    stockQuantity: 15,
    availableMedium: "In Store",
    isActive: true,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: 5,
    name: "USB-C Hub",
    description: "Multi-port adapter with HDMI and USB 3.0",
    imageUrl: "https://example.com/images/hub.jpg",
    sku: "UH-5005",
    price: 39.99,
    stockQuantity: 75,
    availableMedium: "Online",
    isActive: true,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: 6,
    name: "Smart Watch",
    description: "Fitness tracking smartwatch",
    imageUrl: "https://example.com/images/smartwatch.jpg",
    sku: "SW-6006",
    price: 149.99,
    stockQuantity: 30,
    availableMedium: "In Store",
    isActive: true,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: 7,
    name: "Bluetooth Speaker",
    description: "Portable waterproof speaker",
    imageUrl: "https://example.com/images/speaker.jpg",
    sku: "BS-7007",
    price: 89.99,
    stockQuantity: 60,
    availableMedium: "Online",
    isActive: true,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: 8,
    name: "Laptop Stand",
    description: "Adjustable aluminum laptop stand",
    imageUrl: "https://example.com/images/stand.jpg",
    sku: "LS-8008",
    price: 29.99,
    stockQuantity: 120,
    availableMedium: "Online",
    isActive: true,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: 9,
    name: "External SSD",
    description: "1TB portable solid state drive",
    imageUrl: "https://example.com/images/ssd.jpg",
    sku: "ES-9009",
    price: 119.99,
    stockQuantity: 50,
    availableMedium: "Online",
    isActive: true,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: 10,
    name: "Webcam",
    description: "1080p HD webcam with microphone",
    imageUrl: "https://example.com/images/webcam.jpg",
    sku: "WC-1010",
    price: 49.99,
    stockQuantity: 80,
    availableMedium: "In Store",
    isActive: true,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
];