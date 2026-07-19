
import java.util.HashMap;
import java.util.Map;

public class Product {
    String productId;
    String productName;
    int quantity;
    double price;

    public Product(String productId, String productName, int quantity, double price) {
        this.productId = productId;
        this.productName = productName;
        this.quantity = quantity;
        this.price = price;
    }

    public static void main(String[] args) {
        // Using HashMap for O(1) average time complexity operations
        Map<String, Product> inventory = new HashMap<>();

        // Add
        Product p1 = new Product("P001", "Laptop", 10, 999.99);
        inventory.put(p1.productId, p1);

        // Update
        Product existing = inventory.get("P001");
        if (existing != null) {
            existing.quantity = 15;
            existing.price = 949.99;
        }

        // Delete
        inventory.remove("P001");

        System.out.println("Inventory operations performed successfully.");
    }
}