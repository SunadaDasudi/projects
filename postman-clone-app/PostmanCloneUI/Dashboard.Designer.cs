namespace PostmanCloneUI
{
    partial class Dashboard
    {
        /// <summary>
        ///  Required designer variable.
        /// </summary>
        private System.ComponentModel.IContainer components = null;

        /// <summary>
        ///  Clean up any resources being used.
        /// </summary>
        /// <param name="disposing">true if managed resources should be disposed; otherwise, false.</param>
        protected override void Dispose(bool disposing)
        {
            if (disposing && (components != null))
            {
                components.Dispose();
            }
            base.Dispose(disposing);
        }

        #region Windows Form Designer generated code

        /// <summary>
        ///  Required method for Designer support - do not modify
        ///  the contents of this method with the code editor.
        /// </summary>
        private void InitializeComponent()
        {
            formHeader = new Label();
            lblEndpoint = new Label();
            txtEndpoint = new TextBox();
            btnSend = new Button();
            txtResponse = new TextBox();
            statusStrip1 = new StatusStrip();
            toolStripStatusLabel = new ToolStripStatusLabel();
            lblResponse = new Label();
            statusStrip1.SuspendLayout();
            SuspendLayout();
            // 
            // formHeader
            // 
            formHeader.AutoSize = true;
            formHeader.Font = new Font("Segoe UI", 25.8000011F, FontStyle.Regular, GraphicsUnit.Point, 0);
            formHeader.Location = new Point(66, 26);
            formHeader.Name = "formHeader";
            formHeader.Size = new Size(317, 60);
            formHeader.TabIndex = 0;
            formHeader.Text = "Postman Clone";
            // 
            // lblEndpoint
            // 
            lblEndpoint.AutoSize = true;
            lblEndpoint.Location = new Point(66, 184);
            lblEndpoint.Name = "lblEndpoint";
            lblEndpoint.Size = new Size(69, 41);
            lblEndpoint.TabIndex = 1;
            lblEndpoint.Text = "API:";
            // 
            // txtEndpoint
            // 
            txtEndpoint.BorderStyle = BorderStyle.FixedSingle;
            txtEndpoint.Location = new Point(141, 185);
            txtEndpoint.Name = "txtEndpoint";
            txtEndpoint.Size = new Size(873, 47);
            txtEndpoint.TabIndex = 2;
            // 
            // btnSend
            // 
            btnSend.Location = new Point(1020, 185);
            btnSend.Name = "btnSend";
            btnSend.Size = new Size(121, 50);
            btnSend.TabIndex = 3;
            btnSend.Text = "Send";
            btnSend.UseVisualStyleBackColor = true;
            btnSend.Click += btnSend_Click;
            // 
            // txtResponse
            // 
            txtResponse.Location = new Point(66, 307);
            txtResponse.Multiline = true;
            txtResponse.Name = "txtResponse";
            txtResponse.ReadOnly = true;
            txtResponse.ScrollBars = ScrollBars.Both;
            txtResponse.Size = new Size(1075, 319);
            txtResponse.TabIndex = 4;
            // 
            // statusStrip1
            // 
            statusStrip1.ImageScalingSize = new Size(20, 20);
            statusStrip1.Items.AddRange(new ToolStripItem[] { toolStripStatusLabel });
            statusStrip1.Location = new Point(0, 816);
            statusStrip1.Name = "statusStrip1";
            statusStrip1.Size = new Size(1182, 37);
            statusStrip1.TabIndex = 5;
            statusStrip1.Text = "statusStrip1";
            // 
            // toolStripStatusLabel
            // 
            toolStripStatusLabel.BackColor = SystemColors.Control;
            toolStripStatusLabel.Font = new Font("Segoe UI", 13.8F, FontStyle.Regular, GraphicsUnit.Point, 0);
            toolStripStatusLabel.Name = "toolStripStatusLabel";
            toolStripStatusLabel.Size = new Size(76, 31);
            toolStripStatusLabel.Text = "Ready";
            // 
            // lblResponse
            // 
            lblResponse.AutoSize = true;
            lblResponse.Location = new Point(66, 263);
            lblResponse.Name = "lblResponse";
            lblResponse.Size = new Size(146, 41);
            lblResponse.TabIndex = 6;
            lblResponse.Text = "Response";
            // 
            // Dashboard
            // 
            AutoScaleDimensions = new SizeF(17F, 41F);
            AutoScaleMode = AutoScaleMode.Font;
            BackColor = SystemColors.Window;
            ClientSize = new Size(1182, 853);
            Controls.Add(lblResponse);
            Controls.Add(statusStrip1);
            Controls.Add(txtResponse);
            Controls.Add(btnSend);
            Controls.Add(txtEndpoint);
            Controls.Add(lblEndpoint);
            Controls.Add(formHeader);
            Font = new Font("Segoe UI", 18F, FontStyle.Regular, GraphicsUnit.Point, 0);
            Margin = new Padding(6);
            Name = "Dashboard";
            SizeGripStyle = SizeGripStyle.Hide;
            Text = "Postman Clone";
            statusStrip1.ResumeLayout(false);
            statusStrip1.PerformLayout();
            ResumeLayout(false);
            PerformLayout();
        }

        #endregion

        private Label formHeader;
        private Label lblEndpoint;
        private TextBox txtEndpoint;
        private Button btnSend;
        private TextBox txtResponse;
        private StatusStrip statusStrip1;
        private Label lblResponse;
        private ToolStripStatusLabel toolStripStatusLabel;
    }
}
