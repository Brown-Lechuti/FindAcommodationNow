using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc.Rendering;

namespace FindAcommodationNow.Areas.Identity.Pages.Account.Manage
{
    public static class ManageNavPages
    {
        public static string Residence => "Residence";
        public static string Res1 => "Res1";
        public static string Res2 => "Res2";
        public static string Res3 => "Res3";
        public static string Res4 => "Res4";
        public static string Res5 => "Res4";
        /// <summary>
        /// //////////////////////
        /// </summary>
        public static string Index => "Index";

        public static string Email => "Email";

        public static string ChangePassword => "ChangePassword";

        public static string DownloadPersonalData => "DownloadPersonalData";

        public static string DeletePersonalData => "DeletePersonalData";

        public static string ExternalLogins => "ExternalLogins";

        public static string PersonalData => "PersonalData";

        public static string TwoFactorAuthentication => "TwoFactorAuthentication";
        //
        public static string ResidenceNavClass(ViewContext viewContext) => PageNavClass(viewContext, Residence);
        public static string Res1NavClass(ViewContext viewContext) => PageNavClass(viewContext, Res1);
        public static string Res2NavClass(ViewContext viewContext) => PageNavClass(viewContext, Res2);
        public static string Res3NavClass(ViewContext viewContext) => PageNavClass(viewContext, Res3);
        public static string Res4NavClass(ViewContext viewContext) => PageNavClass(viewContext, Res4);
        public static string Res5NavClass(ViewContext viewContext) => PageNavClass(viewContext, Res5);
        //
        public static string IndexNavClass(ViewContext viewContext) => PageNavClass(viewContext, Index);

        public static string EmailNavClass(ViewContext viewContext) => PageNavClass(viewContext, Email);

        public static string ChangePasswordNavClass(ViewContext viewContext) => PageNavClass(viewContext, ChangePassword);

        public static string DownloadPersonalDataNavClass(ViewContext viewContext) => PageNavClass(viewContext, DownloadPersonalData);

        public static string DeletePersonalDataNavClass(ViewContext viewContext) => PageNavClass(viewContext, DeletePersonalData);

        public static string ExternalLoginsNavClass(ViewContext viewContext) => PageNavClass(viewContext, ExternalLogins);

        public static string PersonalDataNavClass(ViewContext viewContext) => PageNavClass(viewContext, PersonalData);

        public static string TwoFactorAuthenticationNavClass(ViewContext viewContext) => PageNavClass(viewContext, TwoFactorAuthentication);

        private static string PageNavClass(ViewContext viewContext, string page)
        {
            var activePage = viewContext.ViewData["ActivePage"] as string
                ?? System.IO.Path.GetFileNameWithoutExtension(viewContext.ActionDescriptor.DisplayName);
            return string.Equals(activePage, page, StringComparison.OrdinalIgnoreCase) ? "active" : null;
        }
    }
}
