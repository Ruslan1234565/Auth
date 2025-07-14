using System.ComponentModel.DataAnnotations;
using System.Text.Json.Serialization;

namespace AuthApi.Models
{
    public class User
    {
        [Key]
        [JsonIgnore]
        public int Id { get; set; }
        public string Email { get; set; } = string.Empty;
        public string Password { get; set; } = string.Empty;
    }
} 