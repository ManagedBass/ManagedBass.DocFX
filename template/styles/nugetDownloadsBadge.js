function FormatDownloadCount(Download)
{
    var k = 1000;
    var m = k * k;

    if (Download >= m)
        return parseFloat((Download / m).toFixed(2)) + "M";

    return Download >= k
                ? (parseFloat((Download / k).toFixed(2)) +"K")
                : Download;
}

function NuGetDownloadBadge(PackageName, ElementId)
{
    var searchQuery = "https://api-v2v3search-0.nuget.org/query?q=" + PackageName + "&skip=0&take=10";

    $.ajax
        ({
            url: searchQuery,
            dataType: 'jsonp',
            success: function (jsonResult)
            {
                var data = jsonResult.data;

                for (var i = 0, n = data.length; i < n; ++i)
                {
                    if (data[i].id == PackageName)
                    {
                        $(ElementId).text(FormatDownloadCount(data[i].totalDownloads));

                        break;
                    }
                }
            }
        });
}

$(document).ready(function ()
{
    NuGetDownloadBadge("ManagedBass", "#MBNuGet");
    NuGetDownloadBadge("ManagedBass.PInvoke", "#MBPNuGet");
});