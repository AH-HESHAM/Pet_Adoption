import java.io.File;
import java.io.IOException;
import java.text.SimpleDateFormat;
import java.util.Date;

public class DatabaseBackup {

    public static void main(String[] args) {
        // Replace these with your Azure MySQL database connection details
        String serverName = "aminserver.mysql.database.azure.com";
        String dbName = "pet_adoption2";
        String dbUsername = "mohamin";
        String dbPassword = "962SWEmoz";
        
        // Azure MySQL requires SSL for connections
        String sslParams = "--ssl-mode=REQUIRED --ssl-ca=path/to/BaltimoreCyberTrustRoot.crt.pem";

        // Create a timestamp for the backup file
        SimpleDateFormat dateFormat = new SimpleDateFormat("yyyyMMdd_HHmmss");
        String timestamp = dateFormat.format(new Date());

        // Specify the folder for saving the backup file
        String backupFolderPath = "backup";
        File backupFolder = new File(backupFolderPath);
        if (!backupFolder.exists()) {
            backupFolder.mkdir();
        }

        // Specify the file name for the backup
        String backupFileName = dbName + "_backup_" + timestamp + ".sql";
        String backupFilePath = backupFolderPath + File.separator + backupFileName;

        // Build the mysqldump command
        String mysqldumpCommand = "mysqldump -h " + serverName + " -u " + dbUsername + " -p" + dbPassword +
                " " + sslParams + " --databases " + dbName + " -r " + backupFilePath;

        // Execute the mysqldump command
        try {
            ProcessBuilder processBuilder = new ProcessBuilder("cmd.exe", "/c", mysqldumpCommand);
            Process process = processBuilder.start();
            int exitCode = process.waitFor();

            if (exitCode == 0) {
                System.out.println("Backup successful. File saved to: " + backupFilePath);
            } else {
                System.err.println("Backup failed. Exit code: " + exitCode);
            }
        } catch (IOException | InterruptedException e) {
            e.printStackTrace();
        }
    }
}
