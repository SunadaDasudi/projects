namespace PostmanCloneUI;
public partial class Dashboard : Form
{
    public Dashboard()
    {
        InitializeComponent();
    }

    private async void btnSend_Click(object sender, EventArgs e)
    {
        //Validate the URL
        try
        {
            toolStripStatusLabel.Text = "Calling API...";

            //Asynchronous call to class library
            await Task.Delay(10000);

            toolStripStatusLabel.Text = "Ready";
        }
        catch (Exception ex)
        {
            txtResponse.Text = "Error: " + ex.Message;
            toolStripStatusLabel.Text = "Error";
        }
    }
}

