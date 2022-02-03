using FindAcommodationNow.Data;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;

[assembly: HostingStartup(typeof(FindAcommodationNow.Areas.Identity.IdentityHostingStartup))]
namespace FindAcommodationNow.Areas.Identity
{
    public class IdentityHostingStartup : IHostingStartup
        {
            public void Configure(IWebHostBuilder builder)
            {
                builder.ConfigureServices((context, services) => {
                    services.AddDbContext<FindAcommodationNowContext>(options =>
                        options.UseSqlServer(
                            context.Configuration.GetConnectionString("FindAcommodationNowConnection"),
                    sqlServerOptionsAction: sqlOptions =>
                    {
                        sqlOptions.EnableRetryOnFailure();
                    }));

                    services.AddDefaultIdentity<IdentityUser>(options => options.SignIn.RequireConfirmedAccount = false)
                       .AddEntityFrameworkStores<FindAcommodationNowContext>();
                });
            }
        }
    
}