import java.io.File;
import java.io.IOException;

public class DatabaseRecovery {

    public static void main(String[] args) {
        // Replace these with your Azure MySQL database connection details
        String serverName = "aminserver.mysql.database.azure.com";
        String dbName = "pet_adoption2";
        String dbUsername = "mohamin";
        String dbPassword = "962SWEmoz";

        // Specify the folder containing the backup file
        String backupFolderPath = "backup";
        String backupFileName = "your_backup_file.sql";
        String backupFilePath = backupFolderPath + File.separator + backupFileName;

        // Build the mysql command for recovery
        String mysqlCommand = "mysql -h " + serverName + " -u " + dbUsername + " -p" + dbPassword + " " + dbName + " < " + backupFilePath;

        // Execute the mysql command
        try {
            ProcessBuilder processBuilder = new ProcessBuilder("cmd.exe", "/c", mysqlCommand);
            Process process = processBuilder.start();
            int exitCode = process.waitFor();

            if (exitCode == 0) {
                System.out.println("Recovery successful.");
            } else {
                System.err.println("Recovery failed. Exit code: " + exitCode);
            }
        } catch (IOException | InterruptedException e) {
            e.printStackTrace();
        }
    }
}
