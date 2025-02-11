using System.Text.Json;

namespace PostmanCloneLibrary;
public class ApiAccess : IApiAccess
{
    private readonly HttpClient _httpClient = new();
    public async Task<string> CallApiAsync(string url,
        bool formatOutput = true,
        HttpAction action = HttpAction.GET)
    {
        var output = await _httpClient.GetAsync(url);

        if (output.IsSuccessStatusCode)
        {
            string json = await output.Content.ReadAsStringAsync();
            if (formatOutput)
            {
                var jsonElement = JsonSerializer.Deserialize<JsonElement>(json);
                json = JsonSerializer.Serialize(jsonElement,
                    new JsonSerializerOptions { WriteIndented = true });
            }

            return json;
        }

        return $"Error: {output.StatusCode}";
    }

    public bool IsValidUrl(string url)
    {
        if (string.IsNullOrWhiteSpace(url)) return false;

        var isValid = Uri.TryCreate(url, UriKind.Absolute, out Uri uriOutput) &&
                     (uriOutput.Scheme == Uri.UriSchemeHttps);
        return isValid;
    }
}

