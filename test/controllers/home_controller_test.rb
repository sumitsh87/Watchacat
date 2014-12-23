require 'test_helper'

class HomeControllerTest < ActionController::TestCase
  test "should get show_landing_page" do
    get :show_landing_page
    assert_response :success
  end

end
