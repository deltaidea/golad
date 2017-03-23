using System.IO;
using Microsoft.AspNetCore.Hosting;
using Microsoft.Extensions.Configuration;

namespace Golad
{
    public class Program
    {
        public static void Main(string[] args)
        {
            var configurations = new ConfigurationBuilder()
               .AddCommandLine(args)
               .Build();

            var host = new WebHostBuilder()
                .UseConfiguration(configurations)
                .UseKestrel()
                .UseContentRoot(Directory.GetCurrentDirectory())
                .UseIISIntegration()
                .UseStartup<Startup>()
                .Build();

            host.Run();
        }
    }
}
