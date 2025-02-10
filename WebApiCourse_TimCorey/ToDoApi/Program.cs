using ToDoApi.StartupConfig;

var builder = WebApplication.CreateBuilder(args);

builder.AddBasicServices();
builder.AddAuthenticationServices();
builder.AddAuthorizationService();
builder.AddDataAccessService();

var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseHttpsRedirection();

app.UseAuthentication();
app.UseAuthorization();
app.UseCors("AllowAll");

app.MapControllers();
app.MapHealthChecks("/health").AllowAnonymous();

app.Run();
