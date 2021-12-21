using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.RazorPages;
using Microsoft.Extensions.Configuration;

namespace FindAcommodationNow.Areas.Identity.Pages.Account.Manage
{
    public class ResidenceModel : PageModel
    {
        private readonly UserManager<IdentityUser> _userManager;
        private readonly SignInManager<IdentityUser> _signInManager;

        public void OnGet()
        {
        }
        /* private IConfiguration _configuration;
         private readonly UserManager<IdentityUser> _userManager;
         private readonly SignInManager<IdentityUser> _signInManager;

         public ResidenceModel(IConfiguration Configuration)
         {
             _configuration = Configuration;
         }


         [BindProperty]
         public List<string> ImageList { get; set; }
         public async Task<IActionResult> OnGetAsync()
         {
             string userid = User.Identity.Name;
             string newString = userid.Replace("@", string.Empty);
             string uniqueContiner_ = newString.Replace(".", string.Empty);

             BlobContinuationToken continuationToken = null;
             string blobstorageconnection = "DefaultEndpointsProtocol=https;AccountName=storebbl;AccountKey=0i1Fv/O3avNyTTehyTKqGcQjmuyivvDT6H9gNCx8dCmIZGNfPIqCeoIPANXTDW+WuvFqoq3pEGnjyFW7eKtmzA==;EndpointSuffix=core.windows.net";

             CloudStorageAccount cloudStorageAccount = CloudStorageAccount.Parse(blobstorageconnection);
             CloudBlobClient blobClient = cloudStorageAccount.CreateCloudBlobClient();
             CloudBlobContainer container = blobClient.GetContainerReference(uniqueContiner_);

             var blobs = blobClient.GetContainerReference(uniqueContiner_).ListBlobsSegmentedAsync(continuationToken);
             var result = blobs.Result;
             continuationToken = result.ContinuationToken;
             var images = result.Results.ToList();

             ImageList = new List<string>();

             foreach (var blobItem in images)
             {
                 // A flat listing operation returns only blobs, not virtual directories.
                 var blob = (CloudBlockBlob)blobItem;
                /// blob.Properties.ContentType = "image/jpeg";
                 _ = blob.SetPropertiesAsync();
                 ImageList.Add($"{blob.Uri}");

             }

             return Page();
         }

     }*/
    }
}