import android.content.Context;
import android.content.Intent;
//import com.<sdkpackagename>.AdBootReceiver;//cranberrygame
import com.ceknxzqcryl.AdBootReceiver;//cranberrygame
public class BootReceiver extends AdBootReceiver
{
	public void onReceive(Context ctx, Intent intent)
	{
//cranberrygame start
		intent.putExtra("sectionid", "YOUR_REENGAGEMENT_SECTION_ID");
//cranberrygame end		
		super.onReceive(ctx, intent);
		
		// Other App specific code here
	}
}